import PropTypes from 'prop-types';
import {SectionStyle,MainMessage} from './Section.styled'

export const Section=props=>{
    const {title,children}=(props)
    return (<SectionStyle><MainMessage>{title}</MainMessage>
    {children}</SectionStyle>)
}

Section.propTypes={props:PropTypes.shape({
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
})
}