import Hoodie from '../media/images/basic_Hoodie.jpeg';
import HoodieHover from '..//media/images/basic_Hoodie_Hover.jpeg';
import Jeans from '../media/images/blue_Jeans.jpeg';
import JeansHover from '..//media/images/blue_Jeans_Hover.jpeg';
import Chinos from '../media/images/brown_Chino.jpeg';
import ChinosHover from '..//media/images/brown_Chino_Hover.jpeg';
import Boots from '../media/images/clarks_Boots.jpeg';
import BootsHover from '..//media/images/clarks_Boots_Hover.jpeg';
import SweatShirt from '../media/images/gray_CrewSweatshirt.jpg';
import SweatShirtHover from '..//media/images/gray_CrewSweatshirt_Hover.jpg';
import Beanie from '../media/images/red_beanie.jpeg';
import BeanieHover from '..//media/images/red_beanie_Hover.jpeg.jpeg';
import Oxford from '../media/images/white_OCBD.jpeg';
import OxfordHover from '..//media/images/white_OCBD_Hover.jpeg.jpeg';
import Shoes from '../media/images/white_Shoes.jpeg';
import ShoesHover from '..//media/images/white_Shoes_Hover.jpeg';
import Socks from '../media/images/white_Socks.jpeg';
import SocksHover from '..//media/images/white_Socks_Hover.jpeg';
import Shirt from '../media/images/white_T.jpg';
import ShirtHover from '..//media/images/white_T_Hover.jpg';

const clothes = [
    {id: 0, name: 'Basic Gray Hoodie', category: 'Outer-Wear', price: 299.99, image: Hoodie, imageHover: HoodieHover, sizes:['XS', 'S', 'M', 'L', 'XL']},
    {id: 1, name: 'Basic Blue Jeans', category: 'Bottoms', price: 199.99, image: Jeans, imageHover: JeansHover, sizes:[26, 28, 30, 32, 34, 36, 38, 40]},
    {id: 2, name: 'Basic Brown Chinos', category: 'Bottoms', price: 149.99, image: Chinos, imageHover: ChinosHover, sizes:[26, 28, 30, 32, 34, 36, 38, 40]},
    {id: 3, name: 'Basic Brown Boots', category: 'Shoes', price: 699.99, image: Boots, imageHover: BootsHover,  sizes:[8, 9, 10, 11, 12, 13]},
    {id: 4, name: 'Basic Gray SweatShirt', category: 'Tops', price: 299.99, image: SweatShirt, imageHover: SweatShirtHover, sizes:['XS', 'S', 'M', 'L', 'XL']},
    {id: 5, name: 'Basic Red Beanie', category: 'Outer-Wear', price: 999.99, image: Beanie, imageHover: BeanieHover, sizes:['One Size']},
    {id: 6, name: 'Basic White OCBD', category: 'Tops', price: 179.99, image: Oxford, imageHover: OxfordHover, sizes:['XS', 'S', 'M', 'L', 'XL']},
    {id: 7, name: 'Basic White Shoes', category: 'Shoes', price: 449.99, image: Shoes, imageHover: ShoesHover, sizes:[8, 9, 10, 11, 12, 13]},
    {id: 8, name: 'Basic White Socks', category: 'Misc', price: 99.99, image: Socks, imageHover: SocksHover, sizes:['One Size']},
    {id: 9, name: 'Basic White Shirt', category: 'Tops', price: 99.99, image: Shirt, imageHover: ShirtHover, sizes:['XS', 'S', 'M', 'L', 'XL']}
]

export default clothes;