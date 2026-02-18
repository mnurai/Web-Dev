import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent  {
  products: Product[] = [
    { id: 1,
    name:  `LS Pro`,
    description: `black`,
    price: 840,
    rating: 5,
    image: `https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-medium`,
    images: [`https://resources.cdn-kaspi.kz/img/m/p/h20/h05/82330895024158.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h0f/h59/82330895351838.png?format=gallery-medium`],
    link: `https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
  },

    { id: 2,
      name:  `phonecase`,
      description: `for iphone 13`,
      price: 60,
      rating: 4.5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/pa2/pc5/64215961.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/p86/pc5/64215962.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 3,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 4,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 5,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 6,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 7,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 8,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 9,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    },

    { id: 10,
      name:  `Generic SF-400`,
      description: `white & cool`,
      price: 670,
      rating: 4.9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      images: [`https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium`, `https://resources.cdn-kaspi.kz/img/m/p/h5a/h8f/64094077124638.jpg?format=gallery-medium`],
      link: `https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=353220100&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1GG-2oFkC2pCW3n2sDLQT3s-Ul2Vig968_zDaDAfRVUB0b4zdnKK9xoCrxsQAvD_BwE`
    }
];
  shareProduct(product: Product, platform: string) {
    const message = `check out this product: ${product.name} - ${product.link}`;
    let url = ``;

    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    } else {
      url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}$text=${encodeURIComponent(product.name)}`;
    }
    window.open(url, '_blank');
  }

  changeImage(product: Product, newImageUrl: string) {
    product.image = newImageUrl;
  }
}
