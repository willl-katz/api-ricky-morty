import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    background-color: #151020;
    border-radius: 4px;
    padding: 2rem;
    .image {
        width: 100%;
        height: 24.3rem;
        overflow: hidden;
        border-radius: 4px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info {
        margin-top: 1.6rem;
        h3 {
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
        }
        ul {
            list-style: none;
            display: flex;
            li {
                display: block;
                font-size: 1.4rem;
                &:last-child {
                    width: 14rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    &::before {
                        content: "";
                        width: 4px;
                        height: 4px;
                        background-color: #ffff;
                        opacity: 0.4;
                        display: inline-block;
                        border-radius: 50%;
                        margin: 0 8px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    @media (max-width: 620px) {
        .info {
            ul {
                display: block;
                li {
                    &:first-child, &:last-child {
                        &:not(:last-child) {
                            margin-bottom: 0.8rem;
                        }
                        &:not(:first-child) {
                            width: 100%;
                        }
                        &::before {
                            content: "";
                            width: 4px;
                            height: 4px;
                            background-color: #ffff;
                            opacity: 0.4;
                            display: inline-block;
                            border-radius: 50%;
                            margin: 0;
                            margin-right: 0.4rem;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
`