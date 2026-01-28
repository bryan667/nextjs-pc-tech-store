import type { Product } from "@/components/products/types";

export const products: Product[] = [
  // GPUs
  {
    id: 'rtx-4090',
    name: 'GeForce RTX 4090',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 1599,
    originalPrice: 1799,
    image: '/images/gpu-rtx4090.jpg',
    specs: {
      'VRAM': '24GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      'CUDA Cores': '16,384',
      'TDP': '450W'
    },
    inStock: true,
    badge: 'Flagship'
  },
  {
    id: 'rtx-4080',
    name: 'GeForce RTX 4080',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 1199,
    image: '/images/gpu-rtx4080.jpg',
    specs: {
      'VRAM': '16GB GDDR6X',
      'Boost Clock': '2.51 GHz',
      'CUDA Cores': '9,728',
      'TDP': '320W'
    },
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 'rtx-4070-ti',
    name: 'GeForce RTX 4070 Ti',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 799,
    image: '/images/gpu-rtx4070.jpg',
    specs: {
      'VRAM': '12GB GDDR6X',
      'Boost Clock': '2.61 GHz',
      'CUDA Cores': '7,680',
      'TDP': '285W'
    },
    inStock: true
  },
  {
    id: 'rtx-4070',
    name: 'GeForce RTX 4070',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 599,
    image: '/images/gpu-rtx4070.jpg',
    specs: {
      'VRAM': '12GB GDDR6X',
      'Boost Clock': '2.48 GHz',
      'CUDA Cores': '5,888',
      'TDP': '200W'
    },
    inStock: true
  },
  {
    id: 'rx-7900-xtx',
    name: 'Radeon RX 7900 XTX',
    brand: 'AMD',
    category: 'gpu',
    price: 999,
    originalPrice: 1099,
    image: '/images/gpu-rx7900.jpg',
    specs: {
      'VRAM': '24GB GDDR6',
      'Boost Clock': '2.5 GHz',
      'Stream Processors': '6,144',
      'TDP': '355W'
    },
    inStock: true,
    badge: 'Hot Deal'
  },
  {
    id: 'rx-7900-xt',
    name: 'Radeon RX 7900 XT',
    brand: 'AMD',
    category: 'gpu',
    price: 899,
    image: '/images/gpu-rx7900.jpg',
    specs: {
      'VRAM': '20GB GDDR6',
      'Boost Clock': '2.4 GHz',
      'Stream Processors': '5,376',
      'TDP': '315W'
    },
    inStock: true
  },
  {
    id: 'rtx-4060-ti',
    name: 'GeForce RTX 4060 Ti',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 399,
    image: '/images/gpu-rtx4060.jpg',
    specs: {
      'VRAM': '8GB GDDR6',
      'Boost Clock': '2.54 GHz',
      'CUDA Cores': '4,352',
      'TDP': '160W'
    },
    inStock: true
  },
  {
    id: 'rx-7800-xt',
    name: 'Radeon RX 7800 XT',
    brand: 'AMD',
    category: 'gpu',
    price: 499,
    image: '/images/gpu-rx7800.jpg',
    specs: {
      'VRAM': '16GB GDDR6',
      'Boost Clock': '2.43 GHz',
      'Stream Processors': '3,840',
      'TDP': '263W'
    },
    inStock: true
  },
  
  // RAM
  {
    id: 'ddr5-6000-corsair',
    name: 'Vengeance RGB DDR5 6000MHz',
    brand: 'Corsair',
    category: 'ram',
    price: 189,
    originalPrice: 229,
    image: '/images/ram-corsair.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6000MHz',
      'CAS Latency': 'CL36',
      'Voltage': '1.35V'
    },
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 'ddr5-6400-gskill',
    name: 'Trident Z5 RGB DDR5 6400MHz',
    brand: 'G.Skill',
    category: 'ram',
    price: 249,
    image: '/images/ram-gskill.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6400MHz',
      'CAS Latency': 'CL32',
      'Voltage': '1.40V'
    },
    inStock: true,
    badge: 'High Performance'
  },
  {
    id: 'ddr5-7200-gskill',
    name: 'Trident Z5 RGB DDR5 7200MHz',
    brand: 'G.Skill',
    category: 'ram',
    price: 399,
    image: '/images/ram-gskill.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '7200MHz',
      'CAS Latency': 'CL34',
      'Voltage': '1.45V'
    },
    inStock: true,
    badge: 'Extreme Speed'
  },
  {
    id: 'ddr4-3600-corsair',
    name: 'Vengeance RGB Pro DDR4 3600MHz',
    brand: 'Corsair',
    category: 'ram',
    price: 99,
    originalPrice: 129,
    image: '/images/ram-corsair.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '3600MHz',
      'CAS Latency': 'CL18',
      'Voltage': '1.35V'
    },
    inStock: true,
    badge: 'Value Pick'
  },
  {
    id: 'ddr5-5600-kingston',
    name: 'FURY Beast DDR5 5600MHz',
    brand: 'Kingston',
    category: 'ram',
    price: 149,
    image: '/images/ram-kingston.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '5600MHz',
      'CAS Latency': 'CL40',
      'Voltage': '1.25V'
    },
    inStock: true
  },
  {
    id: 'ddr5-6000-64gb',
    name: 'Vengeance DDR5 6000MHz',
    brand: 'Corsair',
    category: 'ram',
    price: 349,
    image: '/images/ram-corsair.jpg',
    specs: {
      'Capacity': '64GB (2x32GB)',
      'Speed': '6000MHz',
      'CAS Latency': 'CL36',
      'Voltage': '1.35V'
    },
    inStock: true,
    badge: 'Content Creator'
  },
  {
    id: 'ddr4-3200-kingston',
    name: 'FURY Beast DDR4 3200MHz',
    brand: 'Kingston',
    category: 'ram',
    price: 69,
    image: '/images/ram-kingston.jpg',
    specs: {
      'Capacity': '16GB (2x8GB)',
      'Speed': '3200MHz',
      'CAS Latency': 'CL16',
      'Voltage': '1.35V'
    },
    inStock: true
  },
  {
    id: 'ddr5-6800-gskill',
    name: 'Trident Z5 RGB DDR5 6800MHz',
    brand: 'G.Skill',
    category: 'ram',
    price: 299,
    image: '/images/ram-gskill.jpg',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6800MHz',
      'CAS Latency': 'CL34',
      'Voltage': '1.40V'
    },
    inStock: true
  }
];
