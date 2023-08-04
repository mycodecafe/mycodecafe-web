import React from 'react'
import Card from './CategoryCard'
import './Category.css';

function Category() {
    return (
        <section class="section category" aria-label="category">
            <div class="container">

                <p class="section-subtitle">Categories</p>

                <h2 class="h2 section-title">
                    Online <span class="span">Classes</span> For Remote Learning.
                </h2>

                <p class="section-text">
                    Consectetur adipiscing elit sed do eiusmod tempor.
                </p>

                <ul class = "card-list">
                    <li><Card title={'Tutorial'}
                        image={'/images/tutorial.png'}
                        text={'Lorem ipsum dolor consec tur elit adicing sed umod tempor.'} />
                    </li>

                    <li><Card title={'Tutorial'}
                        image={'/images/tutorial.png'}
                        text={'Lorem ipsum dolor consec tur elit adicing sed umod tempor.'} />
                    </li>

                    <li><Card title={'Tutorial'}
                        image={'/images/tutorial.png'}
                        text={'Lorem ipsum dolor consec tur elit adicing sed umod tempor.'} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Category