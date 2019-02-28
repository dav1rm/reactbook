import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Davi Rodrigues de Medeiros',
          avatar:
            'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        },
        content:
          'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
        createdAt: Date.now(),
      },
      {
        id: 2,
        author: {
          name: 'Davi Rodrigues de Medeiros',
          avatar:
            'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        },
        content:
          'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual garante a contribuição de um grupo importante na determinação dos modos de operação convencionais.',
        createdAt: Date.now(),
      },
      {
        id: 3,
        author: {
          name: 'Davi Rodrigues de Medeiros',
          avatar:
            'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        },
        content:
          'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual garante a contribuição de um grupo importante na determinação dos modos de operação convencionais.',
        createdAt: Date.now(),
      },
      {
        id: 4,
        author: {
          name: 'Davi Rodrigues de Medeiros',
          avatar:
            'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
        },
        content:
          'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual garante a contribuição de um grupo importante na determinação dos modos de operação convencionais.',
        createdAt: Date.now(),
      },
      {
        id: 5,
        author: {
          name: 'Davi Rodrigues de Medeiros',
          avatar:
            'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
        },
        content:
          'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual garante a contribuição de um grupo importante na determinação dos modos de operação convencionais.',
        createdAt: Date.now(),
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} author={post.author} time={post.createdAt} content={post.content} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
