// 'use client';

import { useRouter } from 'next/router';
// import { useParams } from 'next/navigation';
import Image from 'next/image'
import carImg from '../../images/slider-img.png'
import logoBuild from '../../images/icons-build.svg'
import logoEng from '../../images/icons-eng.svg'
import logoShift from '../../images/icons-shift.svg'
import logoSafety from '../../images/label.svg'

export default function Car() {
    // const params = useParams();
    // console.log(params);
    const router = useRouter();
    const slug = router.query.slug || [];
    console.log(slug);
    return <p>Post: {router.query.slug}</p>;

    //<>
    //     <main className="car">
    //         <h2 className="car__title">Chery Tiggo 7 Pro 2020 года</h2>
    //         <p className="car__vin">vin 123456789123</p>
    //         <section className="car__container">
    //             <div className="offer">
    //                 <span className="car__price">
    //                     1 890 000
    //                     <span className='car__price_ru'>₽</span>
    //                 </span>
    //                 <p className="car__virgs">
    //                     <Image src={logoSafety} width={39} height={42} alt="лого КПП" className="car__logo-safety" />
    //                     Гарантия юр. чистоты
    //                 </p>
    //                 <div className="specs">
    //                     <h3 className="car__specs-title">Характеристики</h3>
    //                     <ul className="specs__list">
    //                         <li className="car__charact">
    //                             <Image src={logoBuild} width={90} height={90} alt="лого построения" className="car__logo" />
    //                             2020 год выпуска
    //                         </li>
    //                         <li className="car__charact">
    //                             <Image src={logoEng} width={90} height={90} alt="лого ДВС" className="car__logo" />
    //                             1,5 л / 147 л.с / Бензин
    //                         </li>
    //                         <li className="car__charact">
    //                             <Image src={logoShift} width={90} height={90} alt="лого КПП" className="car__logo" />
    //                             КП - Вариатор
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>

    //             <div className="slider">
    //                 <Image src={carImg} width={876} height={719} alt="фото автомобиля" className="car__image" />

    //             </div>
    //         </section>
    //     </main>
    // </>
}