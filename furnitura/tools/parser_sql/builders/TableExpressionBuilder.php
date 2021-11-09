<?php
/**
 * TableExpressionBuilder.php
 *
 * Builds the table name/join options.
 *
 * PHP version 5
 *
 * LICENSE:
 * Copyright (c) 2010-2014 Justin Swanhart and André Rothe
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * @author    André Rothe <andre.rothe@phosco.info>
 * @copyright 2010-2014 Justin Swanhart and André Rothe
 * @license   https://www.debian.org/misc/bsd.license  BSD License (3 Clause)
 * @version   SVN: $Id: TableExpressionBuilder.php 830 2013-12-18 09:35:42Z phosco@gmx.de $
 * 
 */

require_once dirname(__FILE__) . '/../utils/ExpressionType.php';
require_once dirname(__FILE__) . '/AliasBuilder.php';
require_once dirname(__FILE__) . '/JoinBuilder.php';
require_once dirname(__FILE__) . '/RefTypeBuilder.php';
require_once dirname(__FILE__) . '/RefClauseBuilder.php';
require_once dirname(__FILE__) . '/FromBuilder.php';

/**
 * This class implements the builder for the table name and join options. 
 * You can overwrite all functions to achieve another handling.
 *
 * @author  André Rothe <andre.rothe@phosco.info>
 * @license https://www.debian.org/misc/bsd.license  BSD License (3 Clause)
 *  
 */
class TableExpressionBuilder {

    protected function buildFROM($parsed) {
        $builder = new FromBuilder();
        return $builder->build($parsed);
    }
    
    protected function buildAlias($parsed) {
        $builder = new AliasBuilder();
        return $builder->build($parsed);
    }

    protected function buildJoin($parsed) {
        $builder = new JoinBuilder();
        return $builder->build($parsed);
    }
    
    protected function buildRefType($parsed) {
        $builder = new RefTypeBuilder();
        return $builder->build($parsed);
    }
    
    protected function buildRefClause($parsed) {
        $builder = new RefClauseBuilder();
        return $builder->build($parsed);
    }

    public function build($parsed, $index) {
        if ($parsed['expr_type'] !== ExpressionType::TABLE_EXPRESSION) {
            return "";
        }
        $sql = substr($this->buildFROM($parsed['sub_tree']), 5); // remove FROM keyword
        $sql = "(" . $sql . ")";
        $sql .= $this->buildAlias($parsed);

        if ($index !== 0) {
            $sql = $this->buildJoin($parsed['join_type']) . $sql;
            $sql .= $this->buildRefType($parsed['ref_type']);
            $sql .= $this->buildRefClause($parsed['ref_clause']);
        }
        return $sql;
    }
}
?>
