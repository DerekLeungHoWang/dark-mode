import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(242, 242, 242, 1);
  padding: 20px 0;
`;

const SlidesContainer = styled.div`
  display: flex;
  width: 800px;
  overflow: hidden;
  padding: 0 5px;
`;

const Button = styled.button`
  color: rgba(17, 17, 17, 0.4);
  background-color: transparent;
  padding: 0 10px;
  border: 0;
  display: block;
  align-self: stretch;

 
`;

class Carousel extends React.Component {
    state = {
        cursor: 0,
        jump: false
    };

    ref = React.createRef();

    componentDidMount() {
        this.ref.current.addEventListener("transitionend", this.onTransitionEnd);
    }

    componentWillUnmount() {
        this.ref.current.removeEventListener("transitioned", this.onTransitionEnd);
    }

    animating = false;

    componentDidUpdate(prevProps, prevState) {
        const { cursor, jump } = this.state;
        const { cursor: oldCursor } = prevState;

        if (cursor !== oldCursor) {
            this.animating = true;
        }

        if (jump) {
            setTimeout(() => {
                this.animating = false;
                this.setState({
                    jump: false
                });
            }, 1);
        }
    }

    onTransitionEnd = () => {
        const { cursor } = this.state;
        const { children } = this.props;
        const count = React.Children.count(children);

        this.animating = false;

        if (cursor >= count) {
            this.setState({
                jump: true,
                cursor: 0
            });

            return;
        }

        if (cursor <= -1) {
            this.setState({
                jump: true,
                cursor: count - 1
            });

            return;
        }
    };

    changeCursor = amount => {
        const { cursor } = this.state;

        if (this.animating) {
            return;
        }

        this.setState({
            cursor: cursor + amount
        });
    };

    renderChildren() {
        const { children: childrenElements } = this.props;
        let children = React.Children.toArray(childrenElements);
        children = [].concat(children, children, children);

        return children.map((child, index) => {
            return React.cloneElement(child, { key: index });
        });
    }

    render() {
        const { cursor, jump } = this.state;
        const { children } = this.props;
        const count = React.Children.count(children);

        const style = {
            display: "flex",
            transition: jump ? "none" : "all 200ms ease",
            transform: `translateX(-${(count + cursor) * 250}px)`
        };

        return (
            <Wrapper>
                <button onClick={() => this.changeCursor(-1)}>
                    left
                </button>
                <SlidesContainer>
                    <div style={style} ref={this.ref}>
                        {this.renderChildren()}
                    </div>
                </SlidesContainer>
                <button onClick={() => this.changeCursor(1)}>right</button>
            </Wrapper>
        );
    }
}

export default Carousel;
