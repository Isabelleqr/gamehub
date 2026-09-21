// ETAPA 1 - INICIO DO PROJETO: TELA INICIAL 

// OQUE FAZEMOS AQUI?
// esta é a tela inicial do app (rota "/")

import { View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
// view: container básico
// text: para exibir texto
// ScrollView: permite rolagem vertical
// FlatList: lista otimizada com rolagem
// Pressable: botão de feedback de toque
// Stylesheet: define estilos

import { useRouter} from "expo-router";
// acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca).

import Gamecard from "../components/GameCard";
// Reutilizar componentes, isso evita duplicação no código e mantem consistência visual.

import { jogos } from "../data/jogos";
// Importante uma array de onjetos do arquivo data/jogos.js

import { cores } from "../data/tema";
// importa a paleta de cores do app do arquivo data/tema.js

// ===========================================================================================

export default function Inicio(){
    // obtemos o objeto de navegação
    const router = useRouter();

       //--------------------------------------
       //BLOCO 1 - Preparação dos dados
       //--------------------------------------

    const destaques = jogos.filter((jogo) => jogo.destaque);
    // percorre o array jogos e cria um novo array destaques contendo apenas os objetos cuja o campo "destaque" seja true.

    const populares =[...jogos].sort(() => b.nota - arguments.nota).slice(0, 5);
    // ..jogos -> cria uma cópia do array original
    //.sort((a,b)=> b.nota - a.nota) ordena a cópia da maior not para a menor
    // .slice(0, 5): extrai apenas os 5 primeiros elementos do array

    // BLOCO 2 - ESTRUTURA DA TELA 

    return (
        //inicio do JSX retornando pelo componente: define o que será renderizado na tela
        <ScrollView style={style.container} contentContainerStyle={StyleSheet.conteudo}>
            {/* ScrollView: container com rolagem vertical*/}
            <text style={styles.titulo}>GameHub</text>
            {/* Exibe o texto "GameHub" como titulo, usando o estilo "titulo" */}
            <text style={style.subtitulo}>Seu universo de jogos em um so lugar</text>

       //--------------------------------------
       //BLOCO 2.1 - Seção de jogos
       //--------------------------------------

        {/*Faça o commit */}
        <text style={styles.secaoTitulo}>Jogos em Destaque</text>
        {/* exibe o titulo desta seção, usando o estilom "secaotitulo */}
        
        <FlatList
        data={destaques}
        // define a fonte de dados da lista - array "destaques"
        keyExtractor={(item) => item.id}
        // Função que retorna uma chave única
        horizontal
        //faz a lista rolar
        showsVerticalScrollIndicator={false}
        // oculta a barrinha de rolagem horizontal, deixando a interface mais limpa
        renderItem={({item}) => <GameCard jogo={item}/>}
        // função chamada para cada elemento do array "data"
        />

       //--------------------------------------
       //BLOCO 2.2 - Seção "mais populares"
       //--------------------------------------
        {/* Mesma estrutura da seção anterior, mas com dados diferentes */}

        <text style={styles.secaoTitulo}>Mais Populares</text>
        {/* Título da segunda seção, reaproveitando o mesmo estilo "Seção Título" */}

        <FlatList
            data={populares}
            // dessa vez a fonte de dados é o array "populares" (top 5 por nota)
            keyExtractor={(item) => item.id}
            // mesma lógica de chave única no id do jogo
            horizontal
            // lista horizontal, igual à seção anterior
            showsHorizontalScrollIndicator={false}
            // esconder o indicador de rolagem
            renderItem={({item}) => <Gamecard jogo={item}/>}
            // reutiliza o mesmo componente Gmecard, provando que ele funciona com qualquer lista de jogos
        />
       
       //--------------------------------------
       //BLOCO 2.3 - "Botao ver todos jogos"
       //--------------------------------------

       {/* pressable oferece mais controle sobre o estilo e feedback visual */}
       <pressable
       //aplica o estilo visual no botão
       style={styles.botao}
       onPress={() => router.push("./jogos")}
       //onPress: Função executada quando o usuário toca no botão
       //router.push("/jogos") navega para a rota "/jogos"
       >
        <text style={styles.textobotao}>Ver todos os Jogos</text>

       </pressable>

        </ScrollView>
    );

}

//--------------------------------------
//BLOCO 3 - ESTILOS
//--------------------------------------
//porque usar stylesheet?
//- stylesheet.create oyimixs os estilos (evita recriação desnecessária)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cores.fundo,
    },
    conteudo: {
        padding: 20,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: cores.textoPrincipal,
    },
    subtitulo: {
        fontSize: 15,
        color: cores.textoSecundario,
        marginTop: 4,
        marginBottom: 24,
    },
    secaoTitulo:{
        fontSize: 18,
        fontWeight: "bold",
        color: convertChildrenToString.textoPrincipal,
        marginTop: 8,
        marginBottom: 12,
    },
    botao: {
        backgroundColor: cores.roxo,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 24,
    },
    textobotao:{
        color:cores.textoPrincipal,
        fontSize: 16,
        fontWeight: "bold",
    }

})