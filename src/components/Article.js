import React, {Component} from 'react'


class Article extends Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true

    //     }
    //        this.handleClick = handleClick.bind(this)

    // }
// Experimental syntax
    state = {

        isOpen:true
    }



    render(){
        const {article} = this.props
        const foo = this.props.foo
        console.log('---', this.props)
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
            <h2>
                {article.title}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                    </button>    
            </h2>
            {body}
            <p>Date is { (new Date(article.date)).toDateString() } </p>
        <p>{foo}</p>

            </div>
        )
        

    }
    handleClick = () => {
        console.log('----', 'cliked')
        this.setState({
            isOpen: !this.state.isOpen

        })

    }

//===================Basic React component with restrict functionality=====================
// function Article(props){
//     const {article} = props
//     const foo = props.foo
//     console.log('---', props)
//     const body = <section>{article.text}</section>
//     return (
//         <div>
//         <h2>
//             {article.title}
//             <button onClick={handleClick}>close</button>    
//         </h2>
//         {body}
//         <p>Date is { (new Date(article.date)).toDateString() } </p>
//     <p>{foo}</p>

//         </div>
//     )
//     }

//=======Old syntax======
// function handleClick() {
//     console.log('----', 'cliked')

// }
}
export default Article