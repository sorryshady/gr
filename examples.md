# Conventional Commits Examples

## Format

```
type(scope): description

[optional body]

[optional footer]
```

## Allowed Types

### ✅ Good Examples

#### `feat` - New features

```
feat: add user authentication system
feat(auth): implement OAuth login
feat(api): add user profile endpoint
```

#### `fix` - Bug fixes

```
fix: resolve login button not working
fix(ui): fix button alignment on mobile
fix(api): handle null response from server
```

#### `docs` - Documentation changes

```
docs: update README with setup instructions
docs(api): add endpoint documentation
docs: fix typo in contributing guide
```

#### `style` - Code style/formatting changes

```
style: format code with prettier
style(components): fix indentation
style: remove trailing whitespace
```

#### `refactor` - Code refactoring

```
refactor: simplify user authentication logic
refactor(components): extract reusable button component
refactor(utils): optimize data processing function
```

#### `perf` - Performance improvements

```
perf: optimize database queries
perf(images): implement lazy loading
perf: reduce bundle size by 20%
```

#### `test` - Adding or updating tests

```
test: add unit tests for auth service
test(components): add integration tests for user form
test: fix failing test in user profile
```

#### `build` - Build system changes

```
build: update webpack configuration
build(deps): upgrade to React 18
build: add Docker configuration
```

#### `ci` - CI/CD changes

```
ci: add GitHub Actions workflow
ci: update deployment pipeline
ci: fix build script for production
```

#### `chore` - Maintenance tasks

```
chore: update dependencies
chore: remove unused files
chore: update gitignore
```

#### `revert` - Reverting previous commits

```
revert: revert "feat: add user authentication"
revert: undo last commit due to breaking changes
```

### With Scope Examples

```
feat(auth): add two-factor authentication
fix(ui): resolve button alignment on mobile
docs(api): update endpoint documentation
style(components): format with prettier
refactor(utils): simplify data processing
perf(database): optimize user queries
test(auth): add unit tests for login
build(deps): upgrade to Next.js 15
ci(github): add automated testing
chore(deps): update development dependencies
```

### With Body Examples

```
feat: add user authentication system

- Implement JWT token authentication
- Add login/logout functionality
- Include password reset feature
- Add session management

Closes #123
```

```
fix: resolve critical security vulnerability

- Patch SQL injection in user input
- Add input validation
- Update security headers

Fixes #456
```

## ❌ Bad Examples

### Wrong Format

```
add new feature
fixed bug
updated docs
```

### Missing Type

```
user authentication
login fix
readme update
```

### Wrong Type

```
update: add new feature
change: fix bug
modify: update docs
```

### Too Vague

```
fix stuff
update things
improve code
```

### Too Long Description

```
feat: implement comprehensive user authentication system with JWT tokens, password hashing, session management, and two-factor authentication support
```

### Wrong Scope

```
feat(component): add new API endpoint
fix(database): update UI styling
docs(style): add new feature
```

## Best Practices

1. **Use present tense** - "add" not "added"
2. **Use imperative mood** - "move" not "moves"
3. **Don't capitalize first letter** - "add" not "Add"
4. **No period at the end** - "add feature" not "add feature."
5. **Keep it concise** - under 72 characters
6. **Be specific** - "fix login bug" not "fix bug"

## Quick Reference

| Type       | When to Use   | Example                         |
| ---------- | ------------- | ------------------------------- |
| `feat`     | New features  | `feat: add user dashboard`      |
| `fix`      | Bug fixes     | `fix: resolve login error`      |
| `docs`     | Documentation | `docs: update API docs`         |
| `style`    | Formatting    | `style: format with prettier`   |
| `refactor` | Code changes  | `refactor: simplify auth logic` |
| `perf`     | Performance   | `perf: optimize queries`        |
| `test`     | Tests         | `test: add unit tests`          |
| `build`    | Build system  | `build: update webpack`         |
| `ci`       | CI/CD         | `ci: add GitHub Actions`        |
| `chore`    | Maintenance   | `chore: update deps`            |
| `revert`   | Reverting     | `revert: undo last commit`      |
