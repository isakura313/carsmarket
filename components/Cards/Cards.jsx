import Link from 'next/link'
import Image from 'next/image'
// import styles from '../../src/app/page.module.css'
import cardImg from '../../src/images/img.svg'
import Card from '../../components/Card/Card'

function Cards(props) {
    return (

        // <ul className="cards__container">
        //     <Link href="/car" className="card">
        //         <Image src={cardImg} width={440} height={292} alt="фото автомобиля" className="card__image" />
        //         <h4 className="card__title">
        //             Chery Tiggo 4 PRO Action MT
        //         </h4>
        //         <p className="card__spec">1,5 / 113 Л.С. / MT5</p>
        //         <button className="card__button">Подробнее</button>
        //     </Link>

        //     <Link href="#" className="card">
        //         <Image src={cardImg} width={440} height={292} alt="фото автомобиля" className="card__image" />
        //         <h4 className="card__title">
        //             Chery Tiggo 4 PRO Action MT
        //         </h4>
        //         <p className="card__spec">1,5 / 113 Л.С. / MT5</p>
        //         <button className="card__button">Подробнее</button>
        //     </Link>
        // </ul> 
        <>
            {(props.cards === false || undefined || null)
                ?
                <></> :

                (<ul className="cards__container" cards={props.cards}>
                    {props.cards.map(({ ...card }) =>
                        <Card
                            // handleCardDelete={props.handleCardDelete}
                            card={card}
                            {...card}
                        />
                        // <Link href="/car" className="card">
                        //     <Image src={cardImg} width={440} height={292} alt="фото автомобиля" className="card__image" />
                        //     <h4 className="card__title">
                        //         Chery Tiggo 4 PRO Action MT
                        //     </h4>
                        //     <p className="card__spec">1,5 / 113 Л.С. / MT5</p>
                        //     <button className="card__button">Подробнее</button>
                        // </Link>
                    )}
                </ul>)

            }
        </>

    );
}

export default Cards;