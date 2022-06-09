import React, { useState, useEffect } from "react";
import style from '../styles/Home.module.css'
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Link from 'next/link'

const DetailPage = () => {
  return (
    <section className={style.about} id="about">

    <h1 className={style.heading}> <span>about</span> us </h1>

    <div className={style.row}>

        <div class={style.image}>
          gambar
            {/* <img src="images/about-img.jpeg" alt=""> */}
        </div>

        <div class={style.content}>
            <h3>what makes our coffee special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
            <a href="#" class="btn">learn more</a>
        </div>

    </div>

</section>
  )
}

export default DetailPage
