function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Bird of Paradise',
    description:
      'Impressive and tropical with large, glossy leaves that naturally split over time.',
    status: 'AVAILABLE',
    price: 19900,
    photo: {
      id: '5dfbed262849d7961377c2c0',
      filename: 'bloomscape_bird-of-paradise_slate-resize-e1625252881455.jpg',
      originalFilename:
        'bloomscape_bird-of-paradise_slate-resize-e1625252881455.jpg',
      mimetype: 'image/jpg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5dfbed262849d7961377c2c0',
        version: 372942,
        signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: 'upload',
        etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/12/bloomscape_bird-of-paradise_slate-resize-e1625252881455.jpg?ver=372942',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_bird-of-paradise_slate-resize-e1625252881455.jpg?ver=372942',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Monstera',
    description:
      'Lively and wild with large, tropical leaves. Also known as the Swiss Cheese Plant.',
    status: 'AVAILABLE',
    price: 16900,
    photo: {
      id: '5e2a13f0689b2835ae71d1a5',
      filename: 'bloomscape_monstera_clay-e1633461399574.jpg',
      originalFilename: 'bloomscape_monstera_clay-e1633461399574.jpg',
      mimetype: 'image/jpg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a13f0689b2835ae71d1a5',
        version: 279419,
        signature: 'a430b2d35f6a03dc562f6f56a474deb6810e393f',
        width: 580,
        height: 697,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: 'upload',
        etag: 'aebe8e9cc98ee4ad71682f19af85745b',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_monstera_clay-e1633461399574.jpg?ver=279419',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_monstera_clay-e1633461399574.jpg?ver=279419',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Foxtail Fern',
    description:
      'Although not technically in the fern family, the Foxtail Fern has a similar delicate appearance but requires less watering than a true fern. This plant grows in upright bushy columns that can add a fun flair to any home. Keep in indirect light to low light, and water when the soil is half dry. Maintain its bushy appearance with semi-regular pruning.',
    status: 'AVAILABLE',
    price: 4900,
    photo: {
      id: '5e2a13ff689b2835ae71d1a7',
      filename: 'Bloomscape_FoxtailFern_small_Slate-scaled.jpg',
      originalFilename: 'Bloomscape_FoxtailFern_small_Slate-scaled.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a13ff689b2835ae71d1a7',
        version: 639558,
        signature: '360df116020320a14845cf235b87a4a5cdc23f86',
        width: 580,
        height: 725,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: 'upload',
        etag: 'b6fbc18b196c68e2b87f51539b849e70',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_FoxtailFern_small_Slate-scaled.jpg?ver=639558',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_FoxtailFern_small_Slate-scaled.jpg?ver=639558',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Money Tree',
    description:
      'Popular for its use in Feng Shui, the Money Tree is a pet-friendly and air-purifying plant with large star-shaped leaves and a braided trunk to give your home a tropical feel.',
    status: 'AVAILABLE',
    price: 16900,
    photo: {
      id: '5e2a1413689b2835ae71d1a9',
      filename: 'bloomscape_money-tree_slate-e1643402075928.jpg',
      originalFilename: 'bloomscape_money-tree_slate-e1643402075928.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a1413689b2835ae71d1a9',
        version: 1579815957,
        signature: 'affd16fa20107a4d5399aab553ea77fff1c4b2ef',
        width: 580,
        height: 697,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 2454948,
        type: 'upload',
        etag: 'ce0f36da93c60c5d4406657225206f70',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_money-tree_slate-e1643402075928.jpg?ver=279409',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_money-tree_slate-e1643402075928.jpg?ver=279409',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Fiddle Leaf Fig',
    description:
      'Tall, sculptural, and dramatic. This plant will flourish in the right conditions.',
    status: 'AVAILABLE',
    price: 24900,
    photo: {
      id: '5e2a142c689b2835ae71d1ab',
      filename: 'bloomscape_fiddle-leaf-fig_clay-alt-e1643403500877.jpg',
      originalFilename:
        'bloomscape_fiddle-leaf-fig_clay-alt-e1643403500877.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a142c689b2835ae71d1ab',
        version: 1579815980,
        signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
        width: 580,
        height: 696,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 183071,
        type: 'upload',
        etag: '5550566c7fab113ba32d85ed08f54faa',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_clay-alt-e1643403500877.jpg?ver=279579',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_clay-alt-e1643403500877.jpg?ver=279579',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'ZZ Plant',
    description:
      'With graceful layered leaves, the hardy ZZ Plant is a statement plant that can reach up to 2.5 feet tall. This drought-tolerant plant is tough, beautiful, and nearly indestructible.',
    status: 'AVAILABLE',
    price: 14900,
    photo: {
      id: '5e2a143f689b2835ae71d1ad',
      filename: 'bloomscape_zz-plant_slate-e1644417817545.jpg',
      originalFilename: 'bloomscape_zz-plant_slate-e1644417817545.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a143f689b2835ae71d1ad',
        version: 1579815999,
        signature: '97e8f27cdbb6a736062391b9ac3a5c689bd50646',
        width: 580,
        height: 698,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 286643,
        type: 'upload',
        etag: '3655bfd83998492b8421782db868c9df',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_zz-plant_slate-e1644417817545.jpg?ver=279477',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_zz-plant_slate-e1644417817545.jpg?ver=279477',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Whale Fin Sansevieria',
    description:
      'Making a huge statement with just one leaf, the Whale Fin Sansevieria is quite the standout among houseplants. These Sansevierias do well with infrequent waterings and can tolerate low to indirect bright light. Dust regularly to deter pests and keep the unique dappled pattern looking its best.',
    status: 'AVAILABLE',
    price: 7900,
    photo: {
      id: '5e2a145d689b2835ae71d1af',
      filename: 'Bloomscape_SansevieriaMasoniana_medium_Charcoal-scaled.jpg',
      originalFilename:
        'Bloomscape_SansevieriaMasoniana_medium_Charcoal-scaled.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a145d689b2835ae71d1af',
        version: 1579816030,
        signature: '76dec3670cc4a4c22723720bb94496a35945c626',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 146817,
        type: 'upload',
        etag: '3d68591332785ae5273ed43b1aa91712',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_SansevieriaMasoniana_medium_Charcoal-scaled.jpg?ver=640205',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_SansevieriaMasoniana_medium_Charcoal-scaled.jpg?ver=640205',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Schefflera Arboricola',
    description:
      'With dramatic, umbrella-shaped leaf formations and braided trunk, the Schefflera Arboricola is a no-fuss tree that’s nearly 4 feet tall. Perfect for cozy reading nooks and small spaces where it can receive bright, indirect light.',
    status: 'AVAILABLE',
    price: 24900,
    photo: {
      id: '5e2a147b689b2835ae71d1b1',
      filename: 'bloomscape_schefflera-arboricola_clay.jpg',
      originalFilename: 'bloomscape_schefflera-arboricola_clay.jpg',
      mimetype: 'image/jog',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a147b689b2835ae71d1b1',
        version: 1579816060,
        signature: 'a6161568d2d59a59e8dba9b15e705581198ea377',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 953657,
        type: 'upload',
        etag: 'd89ab8ecc366bc63464a3eeef6ef3010',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_schefflera-arboricola_clay.jpg?ver=279602',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_schefflera-arboricola_clay.jpg?ver=279602',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Philodendron Heartleaf',
    description: 'Outdoorsy ',
    status: 'AVAILABLE',
    price: 3900,
    photo: {
      id: '5e2a149b689b2835ae71d1b3',
      filename: 'bloomscape_philodendron-heartleaf_indigo_0621-scaled.jpg',
      originalFilename:
        'bloomscape_philodendron-heartleaf_indigo_0621-scaled.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a149b689b2835ae71d1b3',
        version: 1579816093,
        signature: '6ac148051cb4ba0227ee49fd61fa1348ab4a9870',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 515360,
        type: 'upload',
        etag: '8aed0984d37a3d12faa832860b29d24b',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2021/06/bloomscape_philodendron-heartleaf_indigo_0621-scaled.jpg?ver=542536',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2021/06/bloomscape_philodendron-heartleaf_indigo_0621-scaled.jpg?ver=542536',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Little Fiddle Leaf Fig',
    description:
      'Sculptural and dramatic, this plant will flourish in the right conditions with a little extra care.',
    status: 'AVAILABLE',
    price: 7900,
    photo: {
      id: '5e2a14b1689b2835ae71d1b5',
      filename: 'bloomscape_ficus-little-fiddle_charcoal-e1625250864922.jpg',
      originalFilename:
        'bloomscape_ficus-little-fiddle_charcoal-e1625250864922.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a14b1689b2835ae71d1b5',
        version: 1579816114,
        signature: '24f3ff4ae91dfcc8d1ddeb1a713215730e834be4',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 71291,
        type: 'upload',
        etag: '3a4b97ef88c550dcd6c2d399d1bc698e',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/03/bloomscape_ficus-little-fiddle_charcoal-e1625250864922.jpg?ver=529645',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/03/bloomscape_ficus-little-fiddle_charcoal-e1625250864922.jpg?ver=529645',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'Burgundy Rubber Tree',
    description:
      'Robust and dramatic, with large, glossy leaves. This striking plant is low-maintenance and durable.',
    status: 'AVAILABLE',
    price: 18400,
    photo: {
      id: '5e2a14bf689b2835ae71d1b7',
      filename: 'canada-goose.jpg',
      originalFilename: 'canada-goose.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a14bf689b2835ae71d1b7',
        version: 1579816128,
        signature: 'bebf3d817e91cdbb91768e8c9c2133a78798a317',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 180261,
        type: 'upload',
        etag: 'f9c8725f815a6873cbdc47ba3f869049',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2020/08/bloomscape_burgany-rubber-tree_indigo-e1633462819294.jpg?ver=279359',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_burgany-rubber-tree_indigo-e1633462819294.jpg?ver=279359',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: 'English Ivy',
    description:
      'The English Ivy ‘Glacier’ is a gorgeous trailing plant for any space. The colors range from icy greens and blues to a creamy leaf edge. This plant will grow quickly in indirect bright light but can also handle low light. This ivy will mature beautifully in a hanging pot, and appreciates a little extra humidity, so mist often.',
    status: 'AVAILABLE',
    price: 3900,
    photo: {
      id: '5e2a14cc689b2835ae71d1b9',
      filename: 'ultra-boost.jpg',
      originalFilename: 'ultra-boost.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'plants-shop-keystone/5e2a14cc689b2835ae71d1b9',
        version: 1579816141,
        signature: '18720c13b7f6d4fcde919dddb33d1c711a459c14',
        width: 580,
        height: 695,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 50754,
        type: 'upload',
        etag: '44cf57f8218f135b82cfa5df0da92a49',
        placeholder: false,
        url:
          'http://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_IvyGlacier_small_slate-scaled.jpg?ver=639583',
        secure_url:
          'https://bloomscape.com/wp-content/uploads/2021/12/Bloomscape_IvyGlacier_small_slate-scaled.jpg?ver=639583',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
