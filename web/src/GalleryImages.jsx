import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES_RAW =
[{
        src: "https://source.unsplash.com/random",
        thumbnail: "https://source.unsplash.com/random",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

const getImages = ()=>{
        let images=[];
        for(let num=1;num<=30;num++)
                let random_number=Math.random().toFixed(3)*1000
                images.push({
                        src: `https://source.unsplash.com/random?sig=${random_number}/1600x900`,
                        thumbnail: `https://source.unsplash.com/random?sig=${random_number}/1600x900`,
                        thumbnailWidth: 320,
                        thumbnailHeight: 174,
                        isSelected: true,
                        caption: "From (Jeshu John - unsplash.com)"
                });//images.push(IMAGES_RAW[Math.floor(Math.random() * 3)])
        return images
}

const GalleryImages = () => {
    return (
            <Gallery images={getImages()}/>
    );
}
export default GalleryImages;
