import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class LightGallery extends Component {
    render() {
        const IMAGES =
        [{
            original: "/img/image1.jpeg",
            thumbnail: "/img/image1_n.png"
        },
        {
            original: "/img/image2.jpeg",
            thumbnail: "/img/image2_n.png"
        },

        {
            original: "/img/image3.jpeg",
            thumbnail: "/img/image3_n.png"
        }]

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Diva 2 N LED Lighting</div>
                            <div>319 lm Rectangular | Adjustable 20° | 2 in. Aperture Size</div>
                            <div align="center"><ImageGallery items={IMAGES}/></div>
                        </div>
                        <div className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
