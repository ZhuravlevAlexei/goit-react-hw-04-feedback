import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="good"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="neutral"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        key={nanoid()}
        className={css.voteButton}
        type="button"
        name="bad"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
