function declareWinner(fighter1, fighter2, firstAttacker) {
    //need a variable that take turns on whos attacking
    let turn = fighter1.name == firstAttacker? fighter1.name : fighter2.name
    
    while(fighter1.health > 0 && fighter2.health > 0){
      if(turn == fighter1.name){
        fighter2.health -= fighter1.damagePerAttack
        if(fighter2.health <= 0){
          return turn
        }
        turn = fighter2.name
      }
      if(turn == fighter2.name){
        fighter1.health -= fighter2.damagePerAttack
        if(fighter1.health <= 0){
          return turn
        }
        turn = fighter1.name
      }
      
    }
  }