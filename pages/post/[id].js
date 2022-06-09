import React, { useState, useEffect } from "react";
import {  Card, CardImg, } from "reactstrap";
import { useRouter } from 'next/router'
import Link from "next/link";
import style from '../../styles/Home.module.css'

const Detail = () => {
    const [state, setState] = useState({ post: [] });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if(id) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => response.json())
            .then((result) => {
                setState({ post: result.drinks[0] });
            });
    } 
}, [id]);

    return(
        <section className={style.about} id="about">

            <div className={style.image}>
                        <Card className={style.cocImage}>
                              <CardImg className={style.card}
                              alt="Card image cap"
                              src= {!!state.post && state.post.strDrinkThumb}
                              top
                              />
                          </Card>
            </div>
    
            <div className={style.content}>
                <h2 className="text-center">{!!state.post && state.post.strDrink}</h2>
                <h3 className={style.font}>#{!!state.post && state.post.strAlcoholic}</h3>
                <div className="ingredients mt-4  ">
                            <h2 className="text-3xl font-medium">
                                Instructions
                            </h2>
                            <hr className="w-12 border-t-2 mt-2 border-stone-900" />
                            <ul className="mt-2">
                                {!!state.post.strIngredient1 && (
                                    <li>{state.post.strInstructions}</li>
                                )}
                             </ul>
                </div>
                <div className="ingredients mt-4  ">
                            <h2 className="text-3xl font-medium">
                                Ingredients
                            </h2>
                           
                            <hr className="w-12 border-t-2 mt-2 border-stone-900" />
                            <ul className="mt-2">
                                {!!state.post.strIngredient1 && (
                                    <li>{state.post.strIngredient1}</li>
                                )}
                                {!!state.post.strIngredient2 && (
                                    <li>{state.post.strIngredient2}</li>
                                )}
                                {!!state.post.strIngredient3 && (
                                    <li>{state.post.strIngredient3}</li>
                                )}
                                {!!state.post.strIngredient4 && (
                                    <li>{state.post.strIngredient4}</li>
                                )}
                                {!!state.post.strIngredient5 && (
                                    <li>{state.post.strIngredient5}</li>
                                )}
                                {!!state.post.strIngredient6 && (
                                    <li>{state.post.strIngredient6}</li>
                                )}
                                {!!state.post.strIngredient7 && (
                                    <li>{state.post.strIngredient7}</li>
                                )}
                                {!!state.post.strIngredient8 && (
                                    <li>{state.post.strIngredient8}</li>
                                )}
                                {!!state.post.strIngredient9 && (
                                    <li>{state.post.strIngredient9}</li>
                                )}
                                {!!state.post.strIngredient10 && (
                                    <li>{state.post.strIngredient10}</li>
                                )}
                                {!!state.post.strIngredient11 && (
                                    <li>{state.post.strIngredient11}</li>
                                )}
                                {!!state.post.strIngredient12 && (
                                    <li>{state.post.strIngredient12}</li>
                                )}
                                {!!state.post.strIngredient13 && (
                                    <li>{state.post.strIngredient13}</li>
                                )}
                                {!!state.post.strIngredient14 && (
                                    <li>{state.post.strIngredient14}</li>
                                )}
                                {!!state.post.strIngredient15 && (
                                    <li>{state.post.strIngredient15}</li>
                                )}
                            </ul>
                        </div>
                <Link href="/" className="text-bold text-center bg-danger">Back To Menu</Link>
            </div>
    </section>
    )

}
export default Detail;


