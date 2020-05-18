import { connect } from 'react-redux';
import QuestionsAndAnswers from '../../questions_answers/QuestionsAndAnswers.jsx';

const mapStateToProps = (store) => ({
    productId: store.productId
})

const QuestionsAndAnswersContainer = connect(mapStateToProps)(QuestionsAndAnswers);

export default QuestionsAndAnswersContainer;