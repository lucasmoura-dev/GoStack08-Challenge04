import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

/* Dogs images */
import Lili from '../../assets/images/dogs/lili.jpg';
import Rottweiler from '../../assets/images/dogs/rottweiler.jpg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Lili Moura',
          avatar: Lili,
        },
        date: '30 Set 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        coments: [
          {
            id: 1,
            author: {
              name: 'Pinsher Brabo',
              avatar: Rottweiler,
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: 'Pinsher Brabo',
              avatar: Rottweiler,
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real) 2"
          }
        ]
      }
    ],
  };
  
  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post 
            key={post.id}
            author={post.author} 
            date={post.date} 
            content={post.content} 
            comments={post.coments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;