Aqui está um README para o algoritmo **Selection Sort**:  

---

# Selection Sort  

O **Selection Sort** é um algoritmo de ordenação simples que organiza os elementos de uma lista dividindo-a em duas partes: a parte ordenada e a não ordenada. Ele encontra repetidamente o menor elemento na parte não ordenada e o move para a parte ordenada.  

## 🚀 Como funciona  

1. A cada iteração, o algoritmo procura o menor elemento na parte não ordenada da lista.  
2. O menor elemento é trocado com o primeiro elemento da parte não ordenada.  
3. A fronteira entre as partes ordenada e não ordenada avança.  
4. O processo é repetido até que toda a lista esteja ordenada.  

## 💻 Implementação (Exemplo em Python)  

```python
def selection_sort(lista):
    n = len(lista)
    for i in range(n):
        # Encontra o menor elemento na parte não ordenada
        menor_indice = i
        for j in range(i + 1, n):
            if lista[j] < lista[menor_indice]:
                menor_indice = j
        # Troca o menor elemento com o primeiro elemento não ordenado
        lista[i], lista[menor_indice] = lista[menor_indice], lista[i]
    return lista

# Exemplo de uso
numeros = [64, 25, 12, 22, 11]
print("Lista ordenada:", selection_sort(numeros))
```

## 🧩 Complexidade  

- **Melhor caso**: \( O(n^2) \).  
- **Caso médio**: \( O(n^2) \).  
- **Pior caso**: \( O(n^2) \).  
- **Espaço adicional**: \( O(1) \) - é um algoritmo in-place.  

## 📚 Características  

- Simples e fácil de implementar.  
- Não é eficiente para grandes listas.  
- **Instável**: a ordem relativa de elementos iguais pode não ser mantida.  
- Utilizado principalmente para fins educacionais ou para listas pequenas.  

## 🔧 Como usar este algoritmo  

1. Copie o código da função `selection_sort` para seu projeto.  
2. Chame a função passando uma lista como argumento.  
3. Receba a lista ordenada como retorno.  

## 🌟 Exemplo de saída  

Entrada: `[64, 25, 12, 22, 11]`  
Saída: `[11, 12, 22, 25, 64]`  