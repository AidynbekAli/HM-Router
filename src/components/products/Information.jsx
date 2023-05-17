import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";

const prodducts = [
  {
    id: "1",
    img: "https://m.media-amazon.com/images/I/61U6oC65TTL._AC_UF894,1000_QL80_.jpg",
    name: "SAMSUNG Galaxy S22 Ultra",
    price: "$800",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "2",
    img: "https://www.tehnooop.fun/wp-content/uploads/2023/02/jSXl7nJqamcmWJjD6cNlYu6tr5SRtpxW6UNsSk6O.jpeg",
    name: "Samsung Galaxy S22 ULTRA [256гб] ",
    price: "$600",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "3",
    img: "https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main3.jpg",
    name: "Galaxy A53 5G",
    price: "$400",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
];

export const PhoneDetails = () => {
  const params = useParams();

  return (
    <div>
      {prodducts.map((item) => {
        return (
          item.id === params.id && (
            <Container>
              <div className="box">
                <img src={item.img} alt="phone" />
              </div>
              <div className="box-2">
                <Button>Go Back</Button>
                <h2>{item.name}</h2>
                <p>Price:{item.price}</p>
                <p>Information:{item.information}</p>
              </div>
            </Container>
          )
        );
      })}
    </div>
  );
};

const Container = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 80vh;
  .box img {
    height: 70vh;
  }

  .box-2 {
    margin-top: 55px;
    margin-right: 10rem;
  }
`;
