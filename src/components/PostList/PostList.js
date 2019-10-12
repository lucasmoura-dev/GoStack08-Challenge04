import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

/* Dogs images */
import Lili from '../../assets/images/dogs/lili.jpg';
import Rottweiler from '../../assets/images/dogs/rottweiler.jpg';
import Pinscher from '../../assets/images/dogs/pinscher.jpeg';
import Golden from '../../assets/images/dogs/golden.jpeg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Lili M.',
          avatar: Lili
        },
        date: '30 Set 2019',
        content: 'Pessoal, alguém sabe o número de um Raçaí delivery?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Latino F.',
              avatar: Rottweiler
            },
            content:
              'Eu conheço e recomendo o Raçaí2Dogs, eles têm excelente opções de acompanhamentos que você irá gostar.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Pinscher Canela',
          avatar: Pinscher
        },
        date: '29 Set 2019',
        content:
          'Hoje já completa 3 dias que o meu dono não brinca comigo com a bolinha, o que eu faço? Estou achando que ele irá adotar outro!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rex',
              avatar: Golden
            },
            content:
              'Você já tentou latir para ele para tentar resolver isso? Você tem todo o direito de exigir isso.'
          },
          {
            id: 2,
            author: {
              name: 'Lili M.',
              avatar: Lili
            },
            content:
              'Vocês já tentaram esconder a bolinha de baixo dos móveis e obrigar eles a pegarem? Eu faço isso e sempre dá certo.'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
