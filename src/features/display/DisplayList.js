import { iteratorSymbol } from "immer/dist/internal";
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import selectFeaturedCampsite from "../campsites/campsites/campsitesSlice";
import selectFeaturedPromotion from "../partners/promotions/promotionsSlice";
import { selectFeaturedPartner } from "./partnersSlice";

const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeaturedPromotion(),
    selectFeaturedPartner(),
  ];

  return (
    <Row>
      {items.map((item, ldx) => {
        return (
          item && 
          <Col md className="m-1" key={idx}>
            <AnimatedDisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
