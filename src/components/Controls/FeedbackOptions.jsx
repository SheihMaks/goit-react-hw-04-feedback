import PropTypes from 'prop-types';
import {FeedbackOptions,Button} from './FeedbackOptions.styled'

export const Controls=({options,onLeaveFeedback})=>{
return(<FeedbackOptions>{options.map(el=>
                <Button type='button' onClick={onLeaveFeedback} key={el}>{el}</Button>              
)}</FeedbackOptions>)
}

Controls.propTypes={
    options:PropTypes.array.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}
