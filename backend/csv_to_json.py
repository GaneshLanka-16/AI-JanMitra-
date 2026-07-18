import pandas as pd

# Read the cleaned CSV
df = pd.read_csv("../data/clean_schemes.csv")

# Replace NaN values
df = df.fillna("Not Available")

# Convert to JSON
df.to_json(
    "../data/schemes.json",
    orient="records",
    indent=4,
    force_ascii=False
)

print("✅ JSON file created successfully!")
print(f"Total Schemes: {len(df)}")