import unittest
from class_to_test import ClassToTest


class TestIt(unittest.TestCase):

    def setUp(self) -> None:
        self.classToTest = ClassToTest()

    def tearDown(self) -> None:
        pass

    def test_correct_name(self) -> None:
        name = "job"
        self.assertEqual(self.classToTest.process_name(name), f"Valid name passed: {name}")

    def test_invalid_name(self) -> None:
        name = "jules"
        self.assertEqual(self.classToTest.process_name(name), f"Invalid name passed: {name}")

    def test_value_error(self) -> None:
        """Testing if ValueError is raised"""
        with self.assertRaises(ValueError):
            self.classToTest.process_name("testValueError")


if __name__ == "__main__":
    unittest.main()
