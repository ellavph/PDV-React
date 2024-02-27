import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { CardInfoProps } from '../../interfaces/CardInfoProps';


const CardInfo: React.FC<CardInfoProps> = ({ title, description, content, footer }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
      </Card>
    );
  }
  
  export default CardInfo;