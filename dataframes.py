import pandas as pd 


df = pd.read_csv("batters.csv", header=0)
df = df.set_index(df.iloc[0])

print(df)
