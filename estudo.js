deixe  tabuada  =  8 ;

função  escreva ( ) {
    documento . escreva ( "Tabuada do "  +  tabuada  +  "<br>" )
    documento . escreva ( tabuada  +  " x 1 = "  +  ( tabuada * 1 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 2 = "  +  ( tabuada * 2 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 3 = "  +  ( tabuada * 3 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 4 = "  +  ( tabuada * 4 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 5 = "  +  ( tabuada * 5 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 6 = "  +  ( tabuada * 6 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 7 = "  +  ( tabuada * 7 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 8 = "  +  ( tabuada * 8 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 9 = "  +  ( tabuada * 9 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 10 = "  +  ( tabuada * 10 )  +  "<br>" ) ;
}

let  lista  =  [ "Jorge" , "Duarte" , "Waldete" , "Raquel" , ] ;

função  mostra ( ) {
    documento . escreva ( lista . comprimento  +  "<br>" ) ;
    for ( let  i  =  0 ;  i  <  lista . length ;  i ++ ) {
        documento . escreva ( lista [ i ]  +  "<br>" ) ;
    }
}

função  mostraTabuada ( ) {
    for ( seja  i  =  1 ;  i  <=  10 ;  i ++ ) {
        documento . escreva ( "O valor do i"  +  i  +  "<br>" ) ;
    }
}
função  moeda ( atual ) {
    retorno  atual . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;
}
função  total ( ) {
    deixe  v  =  documento . getElementById ( "valor" ) . valor ;
    seja  j  =  documento . getElementById ( "juros" ) . valor ;
    seja  t  =  documento . getElementById ( "meses" ) . valor ;
    if  ( ! Número ( v ) ) {
        alert ( "O campo valor deve ser números" ) ;
        documento . getElementById ( "valor" ) . valor  =  "" ;
        documento . getElementById ( "valor" ) . foco ( ) ;
        Retorna
    }
    if  ( ! Número ( j ) ) {
        alert ( "O campo juros deve ser números" ) ;
        documento . getElementById ( "juros" ) . valor  =  "" ;
        documento . getElementById ( "juros" ) . foco ( ) ;
        Retorna
    }
    if  ( ! Número ( t ) ) {
        alert ( "O campo meses deve ser números" ) ;
        documento . getElementById ( "meses" ) . valor  =  "" ;
        documento . getElementById ( "meses" ) . foco ( ) ;
        Retorna
    }

    seja  r  =  0 ;
    for ( deixe  i  = 1 ;  i  <= t ;  i ++ ) {
        r  =  v  *  ( 1  +  ( j / 100 ) ) ;
        documento . write ( "Mês "  +  i  +  " - valor: "  +  moeda ( r )  +  "<br>" ) ;
        v  =  r ;
    }
    documento . write ( "Resultado:"  +  moeda ( r ) ) ;
}
