import { connect } from 'react-redux';
import QuestionsAndAnswers from '../../questions_answers/QuestionsAndAnswers.jsx';

const mapStateToProps = (store) => ({

})

const QuestionsAndAnswersContainer = connect(mapStateToProps)(QuestionsAndAnswers);

export default QuestionsAndAnswersContainer;