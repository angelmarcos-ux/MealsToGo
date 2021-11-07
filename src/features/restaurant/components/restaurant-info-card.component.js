import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color:white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color:white;
`;
const Title = styled(Text)`
    font-family: ${(proops)=> proops.theme.fonts.body};
    font-size:${(proops)=> proops.theme.fontSizes.body};
    color: ${(proops)=> proops.theme.colors.ui.primary};
`;
const Address = styled(Text)`
    font-family: ${(proops)=> proops.theme.fonts.body};
    font-size:${(proops)=> proops.theme.fontSizes.caption};
  `;

const Info = styled.View`
padding: ${(proops)=> proops.theme.space[3]};
`;

const Rating = styled.View`
flex-direction:row;
padding-top: ${(proops)=> proops.theme.space[2]};
padding-top: ${(proops)=> proops.theme.space[2]};
`;

const Section = styled.View`
flex-direction:row;
align-items: center;
`;
const SectionEnd = styled.View`
flex:1;
flex-direction:row;
justify-content: flex-end
`;



export const RestaurantInfoCard = ({ restaurant = {} }) => {
const {
    name ='Some Restaurant',
    icon=["https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"],
    photos=["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "100 some random street",
    isOpenNow= true,
    rating= 4,
    isClosedTemporarily,

} = restaurant;
const ratingArray = Array.from(new Array(Math.floor(rating)));
return (
    <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{uri:photos[0] }}/>
        <Info>
       <Title>{name}</Title>
       <Section>
        <Rating>
          {ratingArray.map(() => (
          <SvgXml xml={star} width={20} height={20}/>
          ))}
        </Rating>
        <SectionEnd>
        {isClosedTemporarily && (
              <Text variant="label" style={{color:"red"}}>
                CLOSED TEMPORARILY
                </Text>
                )}
        {isOpenNow && <SvgXml xml ={open} width={20} height={20} />}
        
        </SectionEnd>
       </Section>
       
       <Address>{address}</Address>
       </Info>
    </RestaurantCard>
);
};

