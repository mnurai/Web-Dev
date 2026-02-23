import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops', },
    { id: 3, name: 'Watches' },
    { id: 4, name: 'Headphones' },
  ];

  products: Product[] = [
    {
      id: 101, categoryId: 1, name: 'iPhone 17', description: 'new iPhone',
      image: 'https://kursor-shop.kz/image/cache/catalog/apple/17/17%20blue-600x600.jpg',
      images: ['https://api.technodom.kz/f3/api/v1/images/800/800/293860_1.jpg', 'https://images.macrumors.com/t/wXcNk2fbdw9q5ZOIpys7Gm7NkTU=/1600x0/article-new/2025/09/iPhone-17-Colors.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtB95xrT3TBu3gBD5e-Bgjdac9ozf-EaSHlBe8v929Gfx_DPlJe_7WQaAphkEALw_wcB',
      likes: 17, rating: 4.9, price: 1230440
    },
    {
      id: 102, categoryId: 1, name: 'iPhone 16', description: 'iPhone 16 version',
      image: 'https://sanmi.kz/upload/iblock/6c6/87295474008094.png',
      images: ['https://sanmi.kz/upload/iblock/0b7/87295472795678.png', 'https://e-katalog.kz/posts/files/6489/89.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-256gb-rozovyi-123730867/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtB95xrT3TBu3gBD5e-Bgjdac9ozf-EaSHlBe8v929Gfx_DPlJe_7WQaAphkEALw_wcB',
      likes: 73, rating: 4.3, price: 1230440
    },
    {
      id: 103, categoryId: 1, name: 'Samsung Galaxy A07', description: 'Смартфон Samsung Galaxy A07 6 ГБ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p28/pd7/61291244.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtB95xrT3TBu3gBD5e-Bgjdac9ozf-EaSHlBe8v929Gfx_DPlJe_7WQaAphkEALw_wcB',
      likes: 43, rating: 3.3, price: 1230440
    },
    {
      id: 104, categoryId: 1, name: ' Redmi A3x', description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7j-6MGOAcCWyy4ggZDZNWQAY&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtB95xrT3TBu3gBD5e-Bgjdac9ozf-EaSHlBe8v929Gfx_DPlJe_7WQaAphkEALw_wcB',
      likes: 67, rating: 3.9, price: 1230440
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Samsung Galaxy A16 6 ГБ/128 ГБ черный',
      description: 'Бюджетный смартфон с 6.7" Super AMOLED (90 Гц), MediaTek Helio G99, камерой 50+5+2 МП, селфи 13 МП, NFC, IP54, Android 14, 5000 мАч с быстрой зарядкой.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium'
      ],
      rating: 4.8,
      likes: 2500,
      price: 1230440,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=353220100'
    },

    {
      id: 106,
      categoryId: 2,
      price: 1230440,
      name: 'Apple MacBook Air 13 2020 8 ГБ SSD 256 ГБ macOS MGN63RU/A',
      description: 'Ультрабук с чипом Apple M1 (8 ядер), 13.3" Retina (2560x1600), 8 ГБ RAM, 256 ГБ SSD, до 18 ч автономии, веб-камера HD, Touch ID, серый космос, вес 1.29 кг.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium'
      ],
      rating: 5.0,
      likes: 415,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=353220100'
    },
    {
      id: 107,
      categoryId: 2,
      price: 1230440,
      name: 'Pryme OfficeBook 15.6" 8 ГБ SSD 256 ГБ Win 11 OfficeBook N15',
      description: 'Офисный ноутбук с Intel Celeron N5095 (4 ядра до 2.9 ГГц), 15.6" IPS Full HD (1920x1080), 8 ГБ RAM, 256 ГБ SSD, Intel UHD Graphics, Wi-Fi, BT, Windows 11, вес 1.8 кг.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p49/75516639.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/p49/75516639.png?format=gallery-medium'
      ],
      rating: 5.0,
      likes: 68,
      link: 'https://kaspi.kz/shop/p/pryme-officebook-15-6-8-gb-ssd-256-gb-win-11-officebook-n15-148883799/?c=353220100'
    },
    {
      id: 108,
      categoryId: 2,
      price: 1230440,
      name: 'Pryme N5095 15.6" 16 ГБ SSD 512 ГБ Win 11 Pro FHK14BK25',
      description: 'Офисный ноутбук с Intel Celeron N5095 (4 ядра до 2.9 ГГц), 15.6" IPS Full HD (1920x1080, матовый), 16 ГБ DDR4, 512 ГБ SSD, Intel UHD Graphics, Wi-Fi, BT, Windows 11 Pro, вес 1.8 кг.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 367,
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=353220100'
    },
    {
      id: 109,
      categoryId: 2,
      price: 1230440,
      name: 'Lenovo IdeaPad 3 15.6" 8 ГБ SSD 256 ГБ DOS 15IGL05 81WQ00ERRK',
      description: 'Бюджетный ноутбук с Intel Pentium Silver N5030 (4 ядра до 3.1 ГГц), 15.6" HD TN (1366x768, матовый), 8 ГБ DDR4, 256 ГБ SSD, Intel UHD Graphics, Wi-Fi, BT, DOS, вес 1.85 кг.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      likes: 610,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=353220100'
    },
    {
      id: 110,
      categoryId: 2,
      price: 1230440,
      name: 'Hydra Home H20 15.6" 12 ГБ SSD 512 ГБ Win 11 MKII',
      description: 'Бюджетный ноутбук с Intel Celeron N4200 (4 ядра до 2.7 ГГц), 15.6" IPS Full HD (1920x1080), 12 ГБ DDR4, 512 ГБ SSD, Intel UHD Graphics, веб-камера, USB 3.0 x2, Mini HDMI, кардридер, Windows 11, вес 1.5 кг.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 780,
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=353220100'
    },

    {
      id: 111,
      categoryId: 3,
      price: 1230440,
      name: 'Smart часы NoLimit GPS черный',
      description: 'Премиум смарт-часы с GPS-трекингом, AMOLED-экраном, водозащитой IP68/5ATM (до 1.5м/30мин), мониторингом пульса/SpO2/сна, 100+ спортивными режимами, звонками, уведомлениями, автономностью 7-14 дней. Совместимы с iOS/Android.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium'
      ],
      rating: 5.0,
      likes: 1216,
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-gps-chernyi-137675544/?c=353220100'
    },
    {
      id: 112,
      categoryId: 3,
      price: 1230440,
      name: 'Apple Watch SE GPS Gen 2 2024 S/M 40 мм бежевый',
      description: 'Смарт-часы 2-го поколения 2024 с Retina LTPO OLED (до 1000 нит), чипом S9 SiP, GPS/GLONASS/Galileo, датчиками пульса/акселерометром/гироскопом, Crash Detection, отслеживанием сна/шума, водозащитой 50м (5 ATM), watchOS 11, до 18 ч автономии.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 613,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=353220100'
    },
    {
      id: 113,
      categoryId: 3,
      price: 1230440,
      name: 'Xiaomi Redmi Watch 5 Active 51 мм черный',
      description: 'Смарт-часы с 2" LCD-дисплеем (320x385, 250 PPI, 500 нит), IPX8-защитой, Bluetooth-звонками (2 микрофона + шумоподавление), пульсометром/SpO2/стресс/сном, 140+ спортрежимами, аккумулятором 470 мАч (до 18 дней), совместимость с iOS/Android.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h70/87197780181022.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h70/87197780181022.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 698,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=353220100'
    },
    {
      id: 114,
      categoryId: 3,
      price: 1230440,
      name: 'Smart часы NoLimit Graf черный',
      description: 'Премиум смарт-часы с AMOLED Full-Touch HD-дисплеем, GPS-трекингом (карта в приложении), защитой IP68/5ATM (бассейн/дождь), пульсом/SpO2/сном/шагомером, звонками/уведомлениями, металлическим корпусом, автономностью 7-14 дней, совместимость iOS/Android.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p12/87453848.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/p12/87453848.jpeg?format=gallery-medium'
      ],
      rating: 5.0,
      likes: 946,
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-graf-chernyi-144951512/?c=353220100'
    },
    {
      id: 115,
      categoryId: 3,
      price: 1230440,
      name: 'Xiaomi Redmi Watch 5 Lite 50 мм черный',
      description: 'Смарт-часы с 1.96" AMOLED (410x502, 332 PPI, AOD), 5-системным GNSS (GPS/GLONASS/Beidou), Bluetooth-звонками (2 микрофона + шумоподавление), пульсометром/SpO2/сном/стрессом, 150+ спортрежимами, защитой 5 ATM, аккумулятором 470 мАч (до 18 дней), HyperOS.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h40/87197782999070.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h40/87197782999070.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 698,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-lite-50-mm-chernyi-chernyi-123879550/?c=353220100'
    },

    {
      id: 116,
      price: 1230440,
      categoryId: 4,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Беспроводные наушники 4-го поколения with чипом H2, персонализированным пространственным аудио с отслеживанием головы, адаптивным эквалайзером, микрофонами с шумоподавлением, IP54-защитой, Bluetooth 5.3, до 5 ч на одном заряде (30 ч с кейсом USB-C), Siri, вес 4.3 г каждый.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 250,
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=353220100'
    },
    {
      id: 117,
      price: 1230440,
      categoryId: 4,
      name: 'Наушники Xiaomi Redmi Buds 6 Play черный',
      description: 'Беспроводные TWS-наушники с 10 мм динамиками, 5 режимами эквалайзера, AI ENC шумоподавлением для звонков (2 микрофона), IPX4-защитой, Bluetooth 5.4, до 7.5 ч (36 ч с кейсом USB-C), быстрой зарядкой (3 ч после 10 мин), сенсорным управлением, вес 4.3 г.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p7d/107072746.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p7d/107072746.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      likes: 290,
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-play-chernyi-123229678/?c=353220100'
    },
    {
      id: 118,
      price: 1230440,
      categoryId: 4,
      name: 'Наушники P9 серебристый',
      description: 'Полноразмерные накладные беспроводные наушники с Bluetooth 5.0 (до 10-20 м), слотом microSD (MP3-плеер), микрофоном для звонков, AUX 3.5 мм (проводное), 40 мм динамиками, басовым звуком, Li-Pol аккумулятором 360 мАч (8 ч музыки, 15 ч разговора), вес ~200 г.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium'
      ],
      rating: 4.6,
      likes: 2929,
      link: 'https://kaspi.kz/shop/p/naushniki-p9-serebristyi-116112464/?c=353220100'
    },
    {
      id: 119,
      categoryId: 4,
      price: 1230440,
      name: 'Наушники Marshall Major IV черный',
      description: 'Накладные беспроводные наушники с 40 мм динамиками, Bluetooth 5.1, 80+ ч автономии (15 мин зарядки = 15 ч), беспроводной зарядкой Qi, микрофоном с шумоподавлением, AUX 3.5 мм, складной конструкцией, кожаными амбушюрами, весом 165 г, диапазоном 20-20 кГц.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 1500,
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=353220100'
    },
    {
      id: 120,
      categoryId: 4,
      price: 1230440,
      name: 'Наушники Xiaomi Redmi Buds 6 Lite черный',
      description: 'Беспроводные TWS-наушники with 12.4 мм титановыми динамиками (20-20 кГц), гибридным ANC до 40 дБ, 2 микрофонами с AI-шумоподавлением, IP54-защитой, Bluetooth 5.3 (Google Fast Pair), сенсорным управлением, до 7 ч (38 ч с кейсом USB-C), вес 4.2 г/наушник, 57 г с кейсом.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfe/88596781.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfe/88596781.jpg?format=gallery-medium'
      ],
      rating: 4.9,
      likes: 390,
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-lite-chernyi-123229664/?c=353220100'
    }
  ];
  getProductsByCategory(categoryId: number) {
    return this.products.filter(product => product.categoryId === categoryId);
  }
}
