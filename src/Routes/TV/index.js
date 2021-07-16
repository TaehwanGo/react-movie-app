import TVContainer from './TVContainer';
import dotenv from 'dotenv';
dotenv.config();

console.log('tony:', process.env.TEST_TONY);
console.log('keke:', process.env.REACT_APP_KEKE);

export default TVContainer;
