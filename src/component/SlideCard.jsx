import { Row,Col, Container } from "reactstrap";
import {AiOutlineArrowRight} from 'react-icons/ai'

const SlideCard = ({image,desc,title}) => {
    return(
        <Container>
            <Row className="mt-5">
                <Col lg="6" md="6" sm="12">
                    <div className="tiger">
                        <img className="slide__img w-100 h-100" src={image} alt={title} />
                    </div>
                </Col>
                
                <Col lg="6" md="6" sm="12">
                    <h3 className="lato-medium mt-3 mt-sm-0 mt-lg-0">{title}</h3>
                    <p className="text-black-50 mt-4 lh-lg">{desc}</p>
                    <span className="text-black-50">Read more <span className="text-black-50"><AiOutlineArrowRight/></span></span>
                </Col>
            </Row>
        </Container>
    );
}

export default SlideCard;