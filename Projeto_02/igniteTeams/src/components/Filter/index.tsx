import { TouchableOpacityProps } from "react-native";
import { Container, Title, filterStyleProps } from "./styled";

type Props = TouchableOpacityProps & filterStyleProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest}: Props){
    return(
        <Container 
            isActive={isActive}
            {...rest} 
        >
            <Title>{title}</Title>
        </Container>
    );
}