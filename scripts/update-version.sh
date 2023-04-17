#!/bin/bash

# echo "IS_GITHUB_ACTIONS: ${IS_GITHUB_ACTIONS}"
# echo "GITHUB_BASE_REF: ${GITHUB_BASE_REF}"
# echo "INTEGRATED_VERSION: ${INTEGRATED_VERSION}"

if [ $IS_GITHUB_ACTIONS == 'true' ]; then
  # set git user (triggered by github actions)
  GITHUB_ACTOR_NAME="$(git log -n 1 --pretty=format:%an)"
  GITHUB_ACTOR_EMAIL="$(git log -n 1 --pretty=format:%ae)"

  git config --global user.name "${GITHUB_ACTOR_NAME}"
  git config --global user.email "${GITHUB_ACTOR_EMAIL}"

  # when branches are merged
  if [ "$GITHUB_BASE_REF" != 'main' ]; then
    # update version in package.json
    npm version $INTEGRATED_VERSION --no-git-tag-version

    git add package.json
    git commit -m ":bookmark: ${INTEGRATED_VERSION}"

    PUSH_TARGET_BRANCH="HEAD:${GITHUB_BASE_REF}"

    git tag $INTEGRATED_VERSION
    git push origin $PUSH_TARGET_BRANCH --tags
  fi
fi
