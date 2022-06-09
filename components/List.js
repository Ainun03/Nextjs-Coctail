import Link from 'next/link';
import {  Card, CardBody,CardImg, CardSubtitle,CardText, Container, Row, Col } from "reactstrap";
import styles from  './Header.module.css'


function Listcom (props){
  const item = props.drink
  return (
  
          <>     
          <div className={styles.body} >
             <Container>
               <br/>
             <div className={styles.App}>
                    <Row>                  
                      <Link href={'/post/' + item.idDrink} key={ item.idDrink}>
                        <Col className={styles.movieWrapper} id="superhero">
                          <Card className={styles.movieImage}>
                              <CardImg className={styles.cardImg}
                              alt="Card image cap"
                              src={ item.strDrinkThumb}
                              top
                              />
                              <CardBody>
                                  

                                    <CardSubtitle className={styles.textCat} >{ item.strDrink}</CardSubtitle>
                                    <CardText className={styles.textDet} >#{ item.strAlcoholic}</CardText>
  
                              </CardBody>
                          </Card>
                        </Col>
                      </Link>
                    </Row>      
            </div>
            </Container>
          </div>
          </>
  )
}
export default Listcom;