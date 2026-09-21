//--------------------------------------
//ETAPA 4 - CRIAR COMPONENTE
//--------------------------------------
//nós vamos reutilizar o componente em 03 telas diferentes (Início, Jogos, Favoritos)
import {view, text, Image, Pressable, StyleSheet} from "react-native";
import { useRouter } from "expo-router";
// navegação programática.
import { cores } from "../data/tema";

export default function GameCard ({jogo}){
    const router = useRouter();

    return (
        <Pressable
        style={Styles.card}
        onPress={() => router.push(`/jogos/${jogo.id}`)} //navega entre as cotas
        >
            <Image source={jogo.imagem} style={styles.imagem}/>
            <View style={styles.info}>
                <text style={styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </text>
                <text style={styles.genero}>{jogo.genero}</text>
                <text style={styles.nota}>🌟{jogo.nota}</text>
            </View>

        </Pressable>
    )
}
const styles = StyleSheet.create({
    
})