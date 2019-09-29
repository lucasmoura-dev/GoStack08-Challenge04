import React, { Component } from 'react';

import './Comment.css';

import Pinscher from '../../assets/images/dogs/rottweiler.jpg';

class Comment extends Component {
  render () {
    return (
      <div class="comment">
        <img class="avatar" src={Pinscher} />
        <div class="content">
          <span class="author">Pinscher Brabo</span>
          A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)
        </div>
      </div>
    );
  }
}

export default Comment;