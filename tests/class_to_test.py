class ClassToTest:

    @staticmethod
    def process_name(name: str) -> str:
        if name == "testValueError":
            raise ValueError("name is testValueError")
        if name in ["job", "fred"]:
            return f"Valid name passed: {name}"

        return f"Invalid name passed: {name}"
