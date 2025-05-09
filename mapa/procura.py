import pandas as pd

caminho_csv = r'C:\DEMANDAS\mapa\indice.csv'

df = pd.read_csv(caminho_csv, encoding='latin1')

def gerar_link_ibge(codigo_ibge):
    return f'https://cidades.ibge.gov.br/brasil/sp/{codigo_ibge}/panorama'

df['Mais'] = df['CODIGO_IBGE'].apply(gerar_link_ibge)

df.to_csv(r'C:\DEMANDAS\mapa\indice_atualizado.csv', index=False, encoding='latin1')
