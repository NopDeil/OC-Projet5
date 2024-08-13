import Card from "../Card/Card";
import "./Gallery.scss";
import Datas from "../../datas/infos.json";


function Gallery() {
    return ( Datas && Datas.length>0 && (
        <section className="gallery">
            {Datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    ))
}

export default Gallery;