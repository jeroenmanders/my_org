.DEFAULT_GOAL := help

CODE = my_org
TEST = poetry run pytest --verbosity=2 --showlocals --strict-markers

.PHONY: help
help:
	@echo "Use make with the following targets:"
	@echo ""
	@echo "    init		initialize environment"
	@echo "    test		run tests"
	@echo "    test-cov		run tests with coverage"
	@echo "    lint		run the linters"
	@echo "    format		reformat the code"
	@echo "    bump_major		bump the major version"
	@echo "    bump_minor		bump the minor version"
	@echo "    bump_patch		bump the patch version"

.PHONY: init
init:
	poetry install
	echo '#!/bin/sh\nmake lint test\n' > .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit

.PHONY: clean
clean:
	find . -type d -name "__pycache__" | xargs rm -rf {};
	rm -rf .coverage .mypy_cache

.PHONY: test
test:
	echo "Testing disabled for now"
	#$(TEST) tests

.PHONY: test-cov
test-cov:
	python -m coverage run -m pytest
	python -m coverage report

.PHONY: lint
lint:
	echo "Linting disabled for now"
	poetry run flake8 --jobs 4 --statistics --show-source $(CODE) tests
	poetry run pylint --jobs 4 --rcfile=setup.cfg $(CODE)
	#poetry run mypy $(CODE) tests TODO: fix mypy errors
	poetry run black --target-version py38 --skip-string-normalization --check $(CODE) tests
	poetry run pytest # --fixtures

.PHONY: format
format:
	poetry run isort $(CODE) tests scripts
	poetry run black --target-version py38 --skip-string-normalization $(CODE) tests scripts
	poetry run unify --in-place --recursive $(CODE) tests scripts

.PHONY: bump_major
bump_major:
	poetry run bumpversion major

.PHONY: bump_minor
bump_minor:
	poetry run bumpversion minor

.PHONY: bump_patch
bump_patch:
	poetry run bumpversion patch