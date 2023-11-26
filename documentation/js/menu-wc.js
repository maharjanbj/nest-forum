'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-forum documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' :
                                            'id="xs-controllers-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' :
                                        'id="xs-injectables-links-module-AppModule-3a51c12a9c87010e80f94ba27d28b8f72853daa3e28d517defef3bb96ae036321bc6adf6ee2ec86cd6a7fb3fdd1843048f9f2e9bc23401e7972631c111186ed8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' : 'data-bs-target="#xs-controllers-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-9c9f61c7a40ac32758bdb6272be52418cf0345b4c6fe12c86d059b96c588d6d5f0c62b09ec92bbad61eecd14f46d547a601892c3d18998d19bca77d51fdb7dd0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' :
                                            'id="xs-controllers-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' :
                                        'id="xs-injectables-links-module-CategoryModule-a9b6cec9fb59ce99e4771bcd644cc3cbc27520a1ddfc99a1a6175b53d80572e0988e7872e998c9266c32a7b333b2d18b27e9bda0a2c1e90054c9bf3f6b2e231d"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqCategoryModule.html" data-type="entity-link" >FaqCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' : 'data-bs-target="#xs-controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' :
                                            'id="xs-controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                            <li class="link">
                                                <a href="controllers/FaqCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' : 'data-bs-target="#xs-injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' :
                                        'id="xs-injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                        <li class="link">
                                            <a href="injectables/FaqCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqModule.html" data-type="entity-link" >FaqModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' : 'data-bs-target="#xs-controllers-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' :
                                            'id="xs-controllers-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' }>
                                            <li class="link">
                                                <a href="controllers/FaqController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' : 'data-bs-target="#xs-injectables-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' :
                                        'id="xs-injectables-links-module-FaqModule-e410816bbe051688bfc940cb3219370aa305a8a9ea82aa5e8f2da33c63e24a13890925e96d695486f03a5864465b99bcd7ef533805b745148714774093f7e30f"' }>
                                        <li class="link">
                                            <a href="injectables/FaqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionModule.html" data-type="entity-link" >QuestionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' : 'data-bs-target="#xs-controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' :
                                            'id="xs-controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                            <li class="link">
                                                <a href="controllers/QuestionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' : 'data-bs-target="#xs-injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' :
                                        'id="xs-injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' : 'data-bs-target="#xs-controllers-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' :
                                            'id="xs-controllers-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' : 'data-bs-target="#xs-injectables-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' :
                                        'id="xs-injectables-links-module-UserModule-93c442c765c31397ac744c93974cf38d99216496999743afae0fe3201f25e1d82cefdb2c2d4b8c90f5713790765213cfcfc80e89501c6f3419c697c117739d15"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqCategoryController.html" data-type="entity-link" >FaqCategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqController.html" data-type="entity-link" >FaqController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/QuestionController.html" data-type="entity-link" >QuestionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFaqCategoryDto.html" data-type="entity-link" >CreateFaqCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFaqDto.html" data-type="entity-link" >CreateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQuestionDto.html" data-type="entity-link" >CreateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Faq.html" data-type="entity-link" >Faq</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaqCategory.html" data-type="entity-link" >FaqCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStorage.html" data-type="entity-link" >JwtStorage</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFaqCategoryDto.html" data-type="entity-link" >UpdateFaqCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFaqDto.html" data-type="entity-link" >UpdateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuestionDto.html" data-type="entity-link" >UpdateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthCheckGuard.html" data-type="entity-link" >AuthCheckGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqCategoryService.html" data-type="entity-link" >FaqCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqService.html" data-type="entity-link" >FaqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link" >QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenGuard.html" data-type="entity-link" >TokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IErrorBody.html" data-type="entity-link" >IErrorBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemsBody.html" data-type="entity-link" >ItemsBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationMetaInterface.html" data-type="entity-link" >PaginationMetaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceBody.html" data-type="entity-link" >ResourceBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpDTO.html" data-type="entity-link" >SignUpDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenStorage.html" data-type="entity-link" >TokenStorage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});