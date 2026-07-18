import pandas as pd

# Load the dataset
df = pd.read_csv("../data/schemes.csv")

# Remove spaces from column names
df.columns = df.columns.str.strip()

# Keep useful columns
columns = [
    "scheme_name",
    "level",
    "state",
    "ministry",
    "department",
    "beneficiary_type",
    "target_beneficiaries",
    "benefit_type",
    "categories",
    "sub_categories",
    "tags",
    "brief_description",
    "benefits",
    "eligibility",
    "application_mode",
    "application_process",
    "documents_required",
    "source_url"
]

# Keep only these columns
df = df[columns]

# Remove duplicate schemes
df = df.drop_duplicates(subset=["scheme_name"])

# Replace empty values
df = df.fillna("Not Available")

# Save cleaned CSV
df.to_csv("../data/clean_schemes.csv", index=False)

print("✅ Cleaning completed successfully!")
print(f"Total schemes: {len(df)}")
print(df.head())