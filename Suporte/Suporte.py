def cria(frequency, element):
    lista1 = []
    for i in range(frequency):
        lista1.append(element)
    return lista1


def inverte(lista):
    lista2 = []
    l = len(lista)
    while l > 0:
        lista2.append(lista[l - 1])
        l -= 1
    return lista2


def limpa(lista):
    lista3 = []
    for i in lista:
        if type(i) == int:
            if i != 0:
                lista3.append(i)
        elif type(i) is str:
            if i != "":
                lista3.append(i)
    return lista3


def converte(lista):
    lista4 = {}

    for i in lista:
        lista4.update({i[0]: i[1]})

    return lista4


def filtra(lista, filter):

    lista5 = []

    for i in lista:
        if i in filter:
            pass
        else:
            lista5.append(i)

    return lista5


def passa(lista):
    lista6 = []

    for i in lista:
        if i in lista6:
            pass
        else:
            lista6.append(i)

    return lista6


def gemeos(lista1, lista2):
    if lista1 == lista2:
        return True
    else:
        return False


def ninho(lista):
    lista8 = []
    for i in lista:
        if type(i) == list:
            for j in i:
                lista8.append(j)
        else:
            lista8.append(i)
    return lista8


def separa(n, m):
    lista9 = []

    lista_apendice = []

    for i in n:
        if n.index(i) == m - 1:
            lista_apendice.append(n[m - 2])
            lista_apendice.append(i)
            lista9.append(lista_apendice)
            lista_apendice = []
            m += 2
        elif n.index(i) == len(n) - 1:
            lista_apendice.append(i)
            lista9.append(lista_apendice)

    return lista9


def igual(lista1, lista2):

    lista10 = []

    for i in lista1:
        if i in lista2:
            lista10.append(i)
        else:
            pass

    return lista10


um = cria(2, "i")
print(um)

dois = inverte([1, 2, 3, 4])
print(dois)

tres = limpa([1, '', False, None, 0, 4, 'ola'])
print(tres)

quatro = converte([["c", 2], ["d", 4]])
print(quatro)

cinco = filtra([5, 4, 3, 2, 5], [5, 3])
print(cinco)

seis = passa([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])
print(seis)

sete = gemeos([1, 2, 3, 4], [1, 2, 3, 4])
print(sete)

sete_meio = gemeos([1, 2, 3, 4], [1, 2, 3, 5])
print(sete_meio)

oito = ninho([1, 2, [3], [4, 5]])
print(oito)

nove = separa([1, 2, 3, 4, 5], 2)
print(nove)

dez = igual([6, 8], [8, 9])
print(dez)
