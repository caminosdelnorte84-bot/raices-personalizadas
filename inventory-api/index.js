/**
 * Cloudflare Worker API that connects to Supabase ERP and exposes product/inventory data
 * for the Raíces Personalizaciones tienda.
 *
 * This worker fetches products and their inventory from the Supabase ERP project
 * and provides a REST API for the tienda to consume.
 */

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with the ERP project credentials
// These should be set as environment variables in the Cloudflare dashboard
const supabaseUrl = env.SUPABASE_URL || 'https://gjzvdepevoviygrcdwqj.supabase.co';
const supabaseKey = env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmoiOiJnbWFpbCIsImV4cCI6OTE1NzU5OTk5OX0.';

const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  async fetch(request, env) {
    // CORS headers for the tienda domain
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Handle OPTIONS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Products endpoint - returns products with stock info
    if (path === '/api/products') {
      return getProducts(request, env, corsHeaders);
    }

    // Health check
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response('Not found', { status: 404 });
  },
};

/**
 * Fetch products with inventory/stock from Supabase ERP
 */
async function getProducts(request, env, corsHeaders) {
  try {
    // Fetch products with their variants and stock
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select(`
        id,
        company_id,
        sku,
        name,
        category,
        cost_price,
        price,
        created_at
      `)
      .order('name', { ascending: true });

    if (productsError) throw productsError;

    // Fetch product variants with stock quantities
    const { data: variants, error: variantsError } = await supabase
      .from('product_variants')
      .select(`
        id,
        product_id,
        size_id,
        color_id,
        stock_quantity,
        base_quantity,
        finished_quantity,
        sizes (name),
        colors (name, hex_code)
      `);

    if (variantsError) throw variantsError;

    // Build product catalog with stock info
    const productMap = new Map();

    // Add all products
    products.forEach(product => {
      productMap.set(product.id, {
        id: product.id,
        sku: product.sku,
        name: product.name,
        category: product.category,
        price: product.price,
        costPrice: product.cost_price,
        variants: []
      });
    });

    // Add variants with stock info
    variants.forEach(variant => {
      const product = productMap.get(variant.product_id);
      if (product) {
        product.variants.push({
          id: variant.id,
          size: variant.sizes?.name || 'Unspecified',
          color: variant.colors?.name || 'Unspecified',
          hexColor: variant.colors?.hex_code || '#000000',
          stockQuantity: variant.stock_quantity || 0,
          baseQuantity: variant.base_quantity || 0,
          finishedQuantity: variant.finished_quantity || 0
        });
      }
    });

    // Convert to array and format response
    const productArray = Array.from(productMap.values()).map(product => ({
      ...product,
      // Calculate total available stock
      totalStock: product.variants.reduce((sum, v) => sum + v.stockQuantity, 0),
      // Determine availability status
      availability: product.variants.length > 0 && product.variants.some(v => v.stockQuantity > 0)
        ? 'available'
        : 'limited'
    }));

    return new Response(
      JSON.stringify({
        success: true,
        products: productArray
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error fetching products from ERP:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Unknown error fetching products'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
}