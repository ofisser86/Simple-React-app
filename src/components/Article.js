import React, { Component } from 'react'


class Article extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true

    //     }
    //        this.handleClick = handleClick.bind(this)

    // }
    // Experimental syntax
    state = {

        isOpen: true
    }

    render() {
        const { article } = this.props
        console.log('---', this.props)
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto"  style={{width:'75%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date {(new Date(article.date)).toDateString()}
                    </h6>
                    
                    {body}

                </div>
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