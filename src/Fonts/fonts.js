import { createGlobalStyle } from 'styled-components';
import MuliRegularWoff from './MuliRegular.woff';
import MuliRegularWoff2 from './MuliRegular.woff2';
import LatoWoff from './Lato.woff';
import LatoWoff2 from './Lato.woff2';
import AvenirHeavyWoff from './AvenirHeavy.woff';
import AvenirHeavyWoff2 from './AvenirHeavy.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'MuliRegular';
        src: local('MuliRegular'), local('MuliRegular'),
        url(${MuliRegularWoff2}) format('woff2'),
        url(${MuliRegularWoff}) format('woff');
    }

    @font-face {
        font-family: 'Lato';
        src: local('Lato'), local('Lato'),
        url(${LatoWoff2}) format('woff2'),
        url(${LatoWoff}) format('woff');
    }

    @font-face {
        font-family: 'AvenirHeavy';
        src: local('AvenirHeavy'), local('AvenirHeavy'),
        url(${AvenirHeavyWoff2}) format('woff2'),
        url(${AvenirHeavyWoff}) format('woff');
    }
`;